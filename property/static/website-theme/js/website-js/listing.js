let website_listing_app = new Vue({
    el: "#website-listing-app",
    data: {
        searchInput: Cookies.get("token"),
        searchResults: '',
        allProperties: '',
        filterInput: '',
        count: 0,
        pageNum: 1,
        processing: false

    },
    methods: {
        get_searchResults: function () {
            let that = this;
            that.processing = true;
            if(that.searchInput){
                axios.get('/api/real_estate/property/'+that.searchInput)
                 .then(function (response) {
                     that.searchResults = response.data.results;
                     that.allProperties = that.searchResults;
                     that.searchResults = _.sortBy(that.searchResults, function (item) {
                         return -item.id;
                     });
                     that.processing = false;
                     Cookies.set("token", '');

                 })
                 .catch(function (response) {
                    alert("Failed fetching data for search.");
                    that.processing = false;
                 });
            } else {
                let url = '/api/property/?page_size=5&page='+that.pageNum;
                axios.get(url)
                 .then(function (response) {
                     that.searchResults = response.data.results;
                     that.count = response.data.count;
                     that.count = Math.ceil(that.count/5);
                     that.allProperties = that.searchResults;
                     that.searchResults = _.sortBy(that.searchResults, function (item) {
                         return -item.id;
                     });
                     that.processing = false;

                 })
                 .catch(function (response) {
                    alert("Failed fetching data for all properties.");
                    that.processing = false;
                 });
            }
        },
        sortPropertyList: function () {
            let that = this;
            let sortList = $("#sort-property-list").val();
            if (sortList === "lth") {
                that.searchResults = _.sortBy(that.searchResults, function (item) {
                    return item.rental_value;
                });
            }
            else if (sortList === "htl") {
                that.searchResults = _.sortBy(that.searchResults, function (item) {
                    return -item.rental_value;
                });
            }
            else if (sortList === "new") {
                that.searchResults = _.sortBy(that.searchResults, function (item) {
                    return -item.id;
                });
            }
            else if (sortList === "area") {
                that.searchResults = _.sortBy(that.searchResults, function (item) {
                    return item.buildup_area;
                });
            }
        },
        filterPropertyList: function () {
            let that = this;
            let filter = $("#filter-property-list").val();
            if (filter === "all") {
                that.searchResults = that.allProperties;
            }
            else if (filter === "budget") {
                that.searchResults = _.filter(that.allProperties, function (item) {
                    return parseFloat(item.rental_value) <= parseFloat(that.filterInput);

                });
            }
            else if (filter === "city") {
                that.searchResults = _.filter(that.allProperties, function (item) {
                    return item.address.city === that.filterInput;
                });
            }
            else if (filter === "locality") {
                that.searchResults = _.filter(that.allProperties, function (item) {
                    return item.address.locality === that.filterInput;
                });
            }
        },
        productDetails: function (property_id) {
            Cookies.set("property-id-for-details", property_id);
            window.location = '/property-details/';
        },
        nextPage: function () {
            this.pageNum = this.pageNum + 1;
            this.get_searchResults();
        },
        prevPage: function () {
            this.pageNum = this.pageNum - 1;
            this.get_searchResults();
        },
        staticPage: function (page) {
            this.pageNum = page;
            this.get_searchResults();
        }
    },
    watch: {

    },
    mounted() {
        this.get_searchResults();

    },
    computed: {

  }
});

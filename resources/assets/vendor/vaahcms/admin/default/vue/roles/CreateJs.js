import TForm from './../reusable/TableFormGenerator';

    export default {

        props: ['urls'],
        computed:{
            ajax_url(){
                let ajax_url = this.$store.state.urls.roles;
                return ajax_url;
            }
        },
        components:{
            't-form': TForm,
        },
        data()
        {
            let obj = {
                assets: null,
                new_item: null,
            };

            return obj;
        },
        watch: {


        },
        mounted() {

            //---------------------------------------------------------------------
            this.getAssets();
            //---------------------------------------------------------------------
            //---------------------------------------------------------------------
            //---------------------------------------------------------------------
            //---------------------------------------------------------------------

        },
        methods: {
            //---------------------------------------------------------------------
            getAssets: function () {
                let assets = this.$store.state.roles.assets;
                if(assets)
                {
                    this.assets = assets;
                }else{
                    var url = this.ajax_url+"/assets";
                    var params = {};
                    this.$vaahcms.ajax(url, params, this.getAssetsAfter);
                }
            },
            //---------------------------------------------------------------------
            getAssetsAfter: function (data) {
                data.type = 'roles';
                this.assets = data;
                this.$store.commit('updateAssets', data);
                this.$vaahcms.stopNprogress();
            },
            //---------------------------------------------------------------------
            updateNewItem: function (item) {
                this.new_item = item;
                this.$vaahcms.console(this.new_item, 'this.new_item-->updated');
            },
            //---------------------------------------------------------------------
            store: function () {
                var url = this.ajax_url+"/store";
                var params = this.new_item;
                this.$vaahcms.console(params, '-->');
                this.$vaahcms.ajax(url, params, this.storeAfter);
            },
            //---------------------------------------------------------------------
            storeAfter: function (data) {

                this.$vaahcms.console(data);

                let id = data.id;

                this.$router.push({ path: `/roles/view/${id}`});
                this.$root.$emit('eListReload');

            },
            //---------------------------------------------------------------------
            //---------------------------------------------------------------------
            //---------------------------------------------------------------------
        }
    }
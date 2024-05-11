<template>
    <div>
        <el-form-item label="省份名称">
            <el-autocomplete v-model="searchQuery" :fetch-suggestions="searchSuggestions" placeholder="请输入省份名称……"
                @select="handleSelect">
            </el-autocomplete>
        </el-form-item>
    </div>
</template>

<script>


export default {
    name: 'SearchCity',
    data() {
        return {
            searchQuery: ''
        };
    },
    props: {
        keyIdentifier: {
            type: String,
            required: true // 父组件需要传递一个唯一标识符给子组件
        }
    },
    methods: {
        searchSuggestions(queryString, cb) {
            const cities = [
                '北京', '上海', '天津', '重庆', '河北', '山西', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东',
                '河南', '湖北', '湖南', '广东', '海南', '四川', '贵州', '云南', '陕西', '甘肃', '青海', '台湾', '内蒙古', '广西', '西藏', 
                '宁夏', '新疆', '香港', '澳门'
            ];
            const matches = cities.filter(province => province.toLowerCase().includes(queryString.toLowerCase()));
            cb(matches);
        },
        handleSelect(item) {
            // 触发自定义事件，并将选中的项作为参数传递给父组件
            this.$emit('selectedItem', { data: item, key: this.keyIdentifier });
            console.log("Selected item:", item);
        }

    }
}
</script>

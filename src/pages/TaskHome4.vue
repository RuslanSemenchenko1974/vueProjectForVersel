<template>
    <div class="mainBlock">
        <img src="@/img/pic.png" alt="" class="mainBlock__img">

        <form @submit.prevent="setupArrays" class="mainBlock__form">
            <input type="text" v-model="arrayX" placeholder="Введите массив  X через пробел" class="mainBlock__form__input">
            <input type="text" v-model="arrayY" placeholder="Введите массив  Y через пробел" class="mainBlock__form__input">           
            <button class="mainBlock__form__btn"> Enter </button>
        </form>
        <div class="error" v-show="toggle">
            <h3>
                Ошибка ввода данных !!!
            </h3>
        </div>
        <div class="pirson" v-show="!toggle">
            <h2>Коэффициент Пирсона r = {{ pirson }}</h2>
        </div>

    </div>

</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
    name: 'NavTtt',

    data() {
        return {
            arrayX: '',
            arrayY: '',
            toggle: false,
            pirson:0,
        };
    },
    computed:{
        ...mapState(['x', 'y']),
        ...mapGetters(['getX', 'getY']),
      
    },

    mounted() {
        
    },

    methods: {
        ...mapMutations(['setX', 'setY', 'setXYEmpty']),
        pirsonCalculate(){
            if(this.x.length !== 0 && this.y.length !== 0){    
                const averageX = this.x.reduce(function (x, y) {return x + y;}, 0)/this.x.length;
                const averageY = this.y.reduce(function (x, y) {return x + y;}, 0)/this.y.length;
                const len = this.x.length <= this.y.length ? this.x.length : this.y.length;
                let sum1 = 0;
                let sum2 = 0;
                let sum3 = 0;
                for (let i = 0; i < len; i++) {                    
                    sum1 = sum1 + (this.x[i] - averageX)*(this.y[i] - averageY);
                    sum2 = sum2 + (this.x[i] - averageX)**2;
                    sum3 = sum3 + (this.y[i] - averageY)**2;
                }
                return sum1/Math.sqrt(sum2*sum3);
                 
            }else{
                return 0;
            }
        },
        returnArrNumber(arr){
            arr = arr.trimStart().trimEnd();
            if (arr===''){
                this.toggle = true;
                return [];
            }
            let array = arr.split(' ');            
            const numberArr = [];
            for (let index = 0; index < array.length; index++) {
                let num = Number(array[index])
                if (isNaN(num)){
                    this.toggle = true;
                    return [];
                } else {numberArr.push(num);}             
            }
            return numberArr;
        },
        setupArrays(){
            this.setXYEmpty;
            this.toggle = false;
            this.setX(this.returnArrNumber(this.arrayX));
            this.setY(this.returnArrNumber(this.arrayY));
            this.pirson = this.pirsonCalculate();
        },

        
    },
    
};
</script>

<style lang="scss" scoped>

</style>
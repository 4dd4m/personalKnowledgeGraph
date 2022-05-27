function getRandomValue(min,max){
    return Math.floor(Math.random() * (max-min) + min);
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth : 100,
            monsterHealth : 100,
            gameOver : false,
            roundCounter : 0,
            gameOver : false,
            log : [],
        }
    },
    methods:{
        surrender(){
            this.gameOver = 'monster';
        },
        resetGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameOver = false;
            this.roundCounter = 0;
            this.gameOver = false;
            this.log = [];
        },
        attackMonster(){
            this.roundCounter++;
            const dmg = getRandomValue(2,12);
            this.log.unshift(`Monster attack for ${dmg} damage.`);
            this.playerHealth - dmg > 0 ? this.playerHealth -= dmg : this.playerHealth =0;
            this.attackPlayer();
        },
        attackPlayer(){
            const dmg = getRandomValue(2,11);
            this.log.unshift(`Player attack for ${dmg} damage.`);
            this.monsterHealth - dmg > 0 ? this.monsterHealth -= dmg : this.monsterHealth =0;
        },
        specialAttack(){
            this.roundCounter++;
            const dmg = getRandomValue(10,25);
            this.log.unshift(`Player used a special attack: ${dmg} damage.`);
            this.monsterHealth-=dmg;
            this.attackMonster();
        },
        healPlayer(){
            this.roundCounter++;
            this.attackMonster();
            const heal = getRandomValue(10,25);
            this.log.unshift(`Player heals himself for ${heal} points.`);
            if(heal + this.playerHealth <= 100){
                this.playerHealth += heal;
            }else{
                this.playerHealth = 100;
            }
        }
    },
    computed:{
        playerHealthStyleObject(){
            return {width: this.playerHealth+'%'};
        },
        monsterHealthStyleObject(){
            return {width: this.monsterHealth+'%'};
        },
        roundCounterEnabled(){
            return this.roundCounter % 3 !== 0;
        },
        healenEnabled(){
            return this.roundCounter % 4 !== 0;
        }
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.gameOver = 'draw'; 
            }else if(value <= 0){
                this.gameOver = 'monster'; 
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.gameOver = 'draw'; 
            }else if(value <= 0){
                this.gameOver = 'player'; 
            }

        },
    }
});
app.mount('#game');

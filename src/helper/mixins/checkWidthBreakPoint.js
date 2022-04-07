const data = {
    computed : {
        width(){
            return this.$store.state.windowWidth.width
        },
        is_xs(){
            return this.windowWidth('xs')
        },
        is_sm(){
            return this.windowWidth('sm')
        },
        is_md(){
            return this.windowWidth('md')
        },
        is_lg(){
            return this.windowWidth('lg')
        },
        is_xl(){
            return this.windowWidth('xl')
        },
        is_disabled(){
            return this.windowWidth('disabled')
        }
    },
    methods : {
        windowWidth(codeWidth){
            if(codeWidth == 'xs' && this.width < 600){
                return true
            }else if(codeWidth == 'sm' && this.width > 600 && this.width < 960){
                return true
            }else if(codeWidth == 'md' && this.width > 960 && this.width < 1264){
                return true
            }else if(codeWidth == 'lg' && this.width > 1264 && this.width < 1904){
                return true
            }else if(codeWidth == 'xl' && this.width > 1904){
                return true
            }else if(codeWidth == 'disabled' && this.width > 1581){
                return true
            }else{
                return false
            }
        }
    }
}

export default data
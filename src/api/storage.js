const support = ((g)=>{
    try {
        if(g.localStorage){
            g.localStorage.setItem('test','test')
            g.localStorage.removeItem('test')
            return true
        } else {
            return false
        }
    } catch (err) {
        return false
    }
})(this || globalThis || window || self || global || {})

export default {
    available: support,
    get(key){
        return localStorage.getItem(key)
    },
    save(key, val){
        localStorage.setItem(key, val)
    },
    remove(key){
        localStorage.removeItem(key)
    },
    replace(key, val){
        this.remove(key)
        this.save(key, val)
    },
    append(key, val, delim=' '){
        let curVal = localStorage.getItem(key);
        if(curVal !== null){
            this.replace(key, `${curVal}${delim}${val}`)
        } else {
            this.save(key, val)
        }
    }
}

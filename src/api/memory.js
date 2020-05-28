const memObj = {}
export default {
    available: true,
    get(key){
        return memObj[key] || null;
    },
    save(key, val){
        memObj[key] = String(val)
    },
    remove(key){
        memObj[key] = undefined
    },
    replace(key, val){
        this.remove(key)
        this.save(key, val)
    },
    append(key, val, delim=' '){
        let curVal = memObj[key] || null;
        if(curVal !== null){
            this.replace(key, `${curVal}${delim}${val}`)
        } else {
            this.save(key, val)
        }
    }
}

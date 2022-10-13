/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false;
        
    const count={}

    for(let i=0;i<s.length;i++){
        if(!count[s[i]]){
           count[s[i]]=0;
        }
        if(!count[t[i]]){
           count[t[i]]=0;
        }
        count[s[i]]++;
        count[t[i]]--;
    }
    let status =true;
    Object.values(count).forEach(item=>{
        if(item !==0){
            status =  false;
        }
    })
    return status;
};
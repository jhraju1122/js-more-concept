const myLoader = () =>{
    return new promise((resolve, reject) =>{
        const success = math.random();
        if(success <= 0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}
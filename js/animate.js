let animateMoudle = (function () {
    /*
    *  功能：让一个盒子水平运动起来
    *  参数1：盒子   参数2：目标位置
    * */
    function animate(ob, target) {
        obj=ob.getElementsByTagName("ul")[0];
        clearInterval(obj.timer); // clearInterval(und) 也不会报错
        obj.timer = setInterval(function () {
            let step =ob.clientWidth; // 步长
            let current = obj.offsetLeft; // 得到盒子相对于参考点的偏移量        
            step = target >= current ? step : -step;  // 此时step要么是正10  要么是-10
            if (Math.abs(target - current) >= Math.abs(step)) {
                // 距离目标的距离 至少还大于一个步长
                current += step;
                obj.style.left = current + "px";
            } else {
                // 距离目标的距离 已经小于了一个步长
                obj.style.left = target + "px";
            }
            if(obj.offsetLeft==target){
                current=0;
                obj.style.left = current + "px";
            }       
        }, 1000) 
    let lis=obj.getElementsByTagName("li")
       for(let i=0;i<lis.length;i++){
        lis[i].addEventListener("mouseover",function(){
            clearInterval(obj.timer);           
          })
          lis[i].addEventListener("mouseout",function(){      
            obj.timer =  setInterval(function () {
               
                let step = ob.clientWidth; // 步长
                let current = obj.offsetLeft; // 得到盒子相对于参考点的偏移量
                
                step = target >= current ? step : -step;  // 此时step要么是正10  要么是-10
                if (Math.abs(target - current) >= Math.abs(step)) {
                    // 距离目标的距离 至少还大于一个步长
                    current += step;
                    obj.style.left = current + "px";
                } else {
                    // 距离目标的距离 已经小于了一个步长
                    obj.style.left = target + "px";
                }
                if(obj.offsetLeft==target){
                    current=0;
                    obj.style.left = current + "px";
                }       
            }, 1000) 
          
          })
       }
       let buts=ob.getElementsByTagName("button");
       buts[0].addEventListener("click",function(){    
           let oldad=obj.offsetLeft;
           let step=ob.clientWidth;   
           if(oldad==0){
               obj.style.left=step-Math.abs(obj.clientWidth)+"px";  
           }else{
            oldad+=step; 
            obj.style.left=oldad+"px"
           }                 
       })
       buts[0].addEventListener("mouseover",function(){
           clearInterval(obj.timer);           
         })
        buts[1].addEventListener("click",function(){     
            let newdad=obj.offsetLeft;
            let step=ob.clientWidth;
            if(newdad==target){
                obj.style.left="0px"  
            }
            else{
            newdad-=ob.clientWidth;
            obj.style.left=newdad+"px"  
        }   
        })
        buts[1].addEventListener("mouseover",function(){
            clearInterval(obj.timer);           
          })
       

} 
     
    // window.animate = animate;  // OK

    function log() {
        console.log(".......xxxxx.....")
    }
    return {
        init:animate,
        log
    }
})();


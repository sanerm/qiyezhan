window.onload=function(){
	let box8131s=document.querySelectorAll(".box8131");
	let box813=document.querySelector(".box813");
	let left=document.querySelector(".box811");
	let right=document.querySelector(".box812");
	let box81=document.querySelector(".box81");
	let lunbos=document.querySelectorAll(".lunbo");
	let flag=true;
	console.log(lunbos);
	let next=now=0;
	let t=setInterval(run,1000);
	
	function run(){
		next++;
		if(next>=box8131s.length){
			next=0;
		}
		box8131s[next].style.left="1200px";
		animate(box8131s[now],{left:-1200});
		/*box8131s[next].style.left="0px";
		box8131s[now].style.left="-1200px";*/
		animate(box8131s[next],{left:0},function(){
			flag=true;
		});
		
		lunbos[now].className="lunbo";
		lunbos[next].className="lunbo xy";
		now=next;

	}
	function run1(){
		next--;
		if(next==-1){
			next=box8131s.length-1;
		}
		box8131s[next].style.left="-1200px";
		animate(box8131s[now],{left:1200});
		/*box8131s[next].style.left="0px";
		box8131s[now].style.left="-1200px";*/
		animate(box8131s[next],{left:0},function(){
			flag=true;
		});
		
		lunbos[now].className="lunbo";
		lunbos[next].className="lunbo xy";
		now=next;
	}
	box81.onmouseenter=function(){
		clearInterval(t);
	}
	box81.onmouseleave=function(){
		t=setInterval(run,1000);
	}
	left.onclick=function(){
		if(flag==false){
			return;
		}
		if(next==0){
			return;
		}
		run();
		flag=false;
	}
	right.onclick=function(){
		if(flag==false){
			return;
		}
		if(next==lunbos.length-1){
			return;
		}
		run1();
		flag=false;
	}
	for(let i=0;i<lunbos.length;i++){
		lunbos[i].onclick=function(){
			if(now==i){
				return;
			}else if(now<i){
				if(flag==false){
					return;
				}
				box8131s[i].style.left="1200px";
				animate(box8131s[now],{left:-1200});
				/*box8131s[next].style.left="0px";
				box8131s[now].style.left="-1200px";*/
				animate(box8131s[i],{left:0},function(){
					flag=true;
				});
				
				lunbos[now].className="lunbo";
				lunbos[i].className="lunbo xy";	
				flag=false;
			}else{
				if(flag==false){
					return;
				}
				box8131s[i].style.left="-1200px";
				animate(box8131s[now],{left:1200});
				/*box8131s[next].style.left="0px";
				box8131s[now].style.left="-1200px";*/
				animate(box8131s[i],{left:0},function(){
					flag=true;
				});
				
				lunbos[now].className="lunbo";
				lunbos[i].className="lunbo xy";
				flag=false;
			}
			next=now=i;
		}
	}

}
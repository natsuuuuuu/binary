const unit = 100;

function setup(){
    createCanvas(8*unit, 8*unit);
    background("white");
    translate(4*unit,4*unit);
    generateSeq([], 15);
}

function generateSeq(seq, level){
    if(level <= 0){
        console.log(evaluate(seq,2));
        //circle(2*evaluate(seq,2),0,1);
        return;
    }

    for(let d=0; d<2; d++){
        seq.push(d); //配列seqの後にdを加える
        generateSeq(seq, level-1);
        seq.pop(); //付け足したdを消す
    }
}

function evaluate(seq, base){
    let sum = math.complex(0,0);
    const b = math.complex(-1,1);
    for(let k in seq){
        sum = math.add(sum, math.multiply(seq[k],math.pow(b,k)));
    }
    if(seq[10]==0 && seq[11]==0){
        fill("#FF773E")
        stroke("#FF773E");
    }
    else if(seq[10]==0 && seq[11]==1){
        fill("#BBFFFF")
        stroke("#BBFFFF");
    }
    else if(seq[10]==1 && seq[11]==0){
        fill("#008000")
        stroke("#008000");
    }
    else{ //奇数の時
        fill("#FFFFCC")
        stroke("#FFFFCC");
    }
    circle(2*sum.re,2*sum.im,1);
    return(sum);
}

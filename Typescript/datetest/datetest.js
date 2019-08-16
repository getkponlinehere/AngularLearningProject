var startDate = '04/16/2019';
var endDate = '11/01/2019';
var dates = [];
var lastdates=[];

var d0 = startDate.split('/');
var d1 = endDate.split('/');
dates.push(d0[0]+"/"+d0[1]+"/"+d0[2]);
for ( var y = d0[2]; y <= d1[2]; y++) {
    for ( var m = d0[0]; m <= 12;m++) {
        if(m==d0[0]){
            continue;
        }
        dates.push("0"+m+"/01/0"+y)
        lastdates.push(new Date(y,m+1,0).getDate());
        if (y >= d1[2] && m >= d1[0]) break;
    };
    d0[0] = 1;
};

console.log(dates);
console.log(lastdates);


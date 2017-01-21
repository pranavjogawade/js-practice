function dynamicAllocation() {
    'use strict';
    var sum = 0, i;
    var stringConcate = "";
    for (i = 0; i < arguments.length; i++) {
        if( typeof arguments[i] == "number" ){
            sum += arguments[i];
        }else{
            stringConcate += arguments[i];
        }
    }
    console.log( sum );
    console.log( stringConcate );
}
dynamicAllocation(1,2,3,4,5,6, "hello ", "this is pranav");
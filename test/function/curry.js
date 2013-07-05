"use strict"

var expect = require('expect.js')
var curry = require('../../function/curry')

describe("function/curry", function(){

    function div(x, y){
        return x / y
    }

    function add3(x, y, z){
        return x + y + x
    }

    it('should curry div, so div :: int -> int -> int becomes div_curried :: int -> int', function(){
        var div_c = curry(div, 10)
        expect(div_c(2)).to.be(5)
    })

    it('shoud curry add3', function(){
        var added = curry(add3, 3)(4)(5)
        expect(added).to.be(12)
    })

})

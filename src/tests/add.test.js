const add=(a,b)=>(a+b)

test('should add 2 numbers',()=>{
    const res=add(3,4);
    expect(res).toBe(7)
});
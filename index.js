// code your solution here
const superbowlWin=(record)=>
{
const r=record.find(({result}) =>((result)=== "W"));

return (r?r.year:undefined);
}
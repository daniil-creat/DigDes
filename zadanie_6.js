var model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
];


var n = 0;
for(var i = 0;i<model.length; i++){

    if(model[i].user.id==0){
        if(n==0){
        console.log('{\n  id:'+model[i].user.id+'\n  name:'+model[i].user.name+',\n posts:[\n{');
         n = 1
     }
    console.log('   id:'+model[i].id+',\n   title:'+model[i].title+',\n   text:'+model[i].text+',');    
}
}
console.log('],\n  },');
n=0;
for(var i = 0;i<model.length; i++){

    if(model[i].user.id==1){
        if(n==0){
        console.log('{\n  id:'+model[i].user.id+'\n  name:'+model[i].user.name+',\n posts:[\n{');
         n = 1
     }
    console.log('   id:'+model[i].id+',\n   title:'+model[i].title+',\n   text:'+model[i].text+',');    
}
}
console.log('],\n  },');
n=0;
for(var i = 0;i<model.length; i++){

    if(model[i].user.id==2){
        if(n==0){
        console.log('{\n  id:'+model[i].user.id+'\n  name:'+model[i].user.name+',\n posts:[\n{');
         n = 1
     }
    console.log('   id:'+model[i].id+',\n   title:'+model[i].title+',\n   text:'+model[i].text+',');    
}
}
console.log('],\n  },');


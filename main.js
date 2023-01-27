var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 100
    },
    {
        id: 4,
        name: 'PHP',
        coin: 300
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }
];


// var i = 0;

// function coinHandler(accumulator,currentValue,currenIndex,originArray) {
//     i++;
//     var total = accumulator + currentValue.coin;
//     // console.table({
//     //     'Lượt chạy' : i,
//     //     'Biến tích trữ' : accumulator,
//     //     'Tổng coin' : total
//     // });
//     return total;
// }
// var totalCoin = courses.reduce(coinHandler,0);
// console.log(totalCoin)

/*
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  
function calculateRating(watchList) {
    var arrays = watchList.filter(function(watchItem) {
        return watchItem.Director === "Christopher Nolan";
      })

        var i = 0;
        var sumRates = arrays.reduce(function(rate,array){
          i++;
          
          return rate+Number(array.imdbRating);
      },0);
      return sumRates/i;
        
    
}   
    
  

  
  
  
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675
*/  

// Array.prototype.reduce2 = function(callback,result) {
//     let i = 0;
//     if (arguments.length < 2) {
//         i = 1;
//         result = this[0]
//     }
//     for(; i < this.length; i++) {
//         result = callback(result,this[i],i,this);
//     }
//     return result;
// }

// var numbers = [1, 2, 3, 4, 5];

// var result = numbers.reduce2(function(total,number){
//     return total+number
// },10);
// console.log(result);


//SỬ DỤNG REDUCE ĐỂ BIẾN CHUỖI THÀNH OBJECT

// function arrToObj(arr) {
//     var obj = arr.reduce(function(objOutput,arrItem){
//         objOutput[arrItem[0]] = arrItem[1];
//         return objOutput;
//     },{});
//     return obj;
// }
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
    
// ];
// console.log(arrToObj(arr));





//               PROMISE METHODS(RESOLVE, REJECT, ALL)
// function sleep(ms) {
//   return new Promise (function(resolve) {
//     setTimeout(resolve,ms);
//   });
// }

// sleep(1000)
//   .then(function() {
//     console.log(1);
//     return sleep(1000);
//   })
//   .then(function() {
//     console.log(2);
//     return new Promise(function(resolve,reject) {
//       reject();
//     });
//   })
//   .then(function() {
//     console.log(3);
//     return sleep(1000);
//   })
//   .then(function() {
//     console.log(4);
//     return sleep(1000);
//   })
//   .catch(function() {
//     console.log('Error');
//   })






//                  PROMISE EXAMPLE
var users = [
  {
    id: 1,
    name: 'Kien Dam',
  },
  {
    id: 2,
    name: 'Son Dang',
  },
  {
    id: 3,
    name: 'Hung Dam',
  }
  //....
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: 'anh sơn chưa ra video :('
  },
  {
    id: 2,
    user_id: 2,
    content: 'Vừa ra xong em ơi!',
  },
  {
    id:3,
    user_id: 1,
    content: 'Cảm ơn anh!',
  }
];

//1. Lấy comments
//2. Từ comments lấy ra user_id,
// từ user_id lấy ra user tương ứng

//FAKE API

// function getComments() {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve(comments);
//     }, 1000);
//   })
// }

// function getUsersByIds(userIds) {
//   return new Promise(function(resolve) {
    
//       var result = users.filter(function(user) {
//         return userIds.includes(user.id);
//       });
//       setTimeout(function() {
//         resolve(result);
//       },1000)
//   })
// }

// getComments()
//   .then(function(comments) {
//     var userIds = comments.map(function(comment) {
//       return comment.user_id;
//     })
//   return getUsersByIds(userIds) 
//     .then(function(usersComment) {
//       return {
//         users: usersComment,
//         comments: comments,
//       };
//     })
//   })
//   .then(function(data) {
    
//     var commentBlock = document.getElementById('comment-block');
//     var html = '';
//     data.comments.forEach(function(comment) {
//       var user = data.users.find(function(user) {
//         return user.id === comment.user_id;
//       });
//       html += `<li>${user.name}: ${comment.content}</li>`;
//     });

//     commentBlock.innerHTML = html;
//   })

var postApi = 'https://jsonplaceholder.typicode.com/posts'

fetch(postApi) //Trả về cho mình stream (dòng dữ liệu)
  .then(function(response) {
    return response.json();   // trả về 1 promise
    // khi .json nó sẽ trả về cho mình 1 JS type
    // <=> JSON.parse() : JSON -> JS types
  })
  .then(function(posts) {
    console.log(posts);
    var commentBlock = document.getElementById('comment-block');
    var html = '';
    posts.forEach(function(post) {
      
    })
  })
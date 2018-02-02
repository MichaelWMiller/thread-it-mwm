/**
 * photoUrl: string
 * author: string
 * body: string
 * created: datetime
 * score: number
 * 
 * //defaults:
 * id = 500 
 * score = 0
 * votes = {
 *      up: 0,
 *      down: 0
 * }
 * created = Date.now() 
 * 
 */

var allPosts = []
var id = 500

function Post(photoUrl, author, body) {
    this.photoUrl = photoUrl
    this.author = author
    this.body = body
        //Default Properties
    this.score = 0
    this.votes = {
        up: 0,
        down: 0
    }
    this.created = Date.now()
    this.id = id
    id++
    allPosts.push(this)
}

new Post('//placehold.it/80x80', 'Capt Kirk', 'Spock!  Spock')
new Post('//placehold.it/80x80', 'Adm Janeway', 'Have my cake and eat it!')
new Post('//placehold.it/80x80', 'LCDR Data', 'Get down Spot')
new Post('//placehold.it/80x80', 'Counselor Troy', 'Search your feelings')
new Post('//placehold.it/80x80', 'Capt Picard', 'Make it so')
new Post('//placehold.it/80x80', 'Ens Crusher', 'Wont let me finish the season')
new Post('//placehold.it/80x80', 'Dr McCoy', 'Dammit Jim!')
new Post('//placehold.it/80x80', 'LCDR Scott', 'Geeven er all sheez got')
new Post('//placehold.it/80x80', 'Ens Redshirt', 'Not going to make it, am I?')

var postContainerElement = document.getElementById('posts-container')

function draw(posts) {
    var template = ``
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        template += `
         <!-- POST -->
         <div class="col-md-6 offset-md-3 col-sm-12">
             <div class="card p-3">
                 <div class="card-details flex">
                     <div class="person-details">
                         <img src="${post.photoUrl}" alt="">
                         <h4>${post.author}</h4>
                     </div>
                     <div class="post-details m-l-1">
                         <p>${post.body}</p>
                         <div>
                             <button class="btn btn-warning" onclick="vote(1, '${post.id}')">UP</button>
                             <button class="btn btn-danger" onclick="vote(-1, '${post.id}')">DOWN</button>
                             <span>${post.score}</span>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <!-- END POST -->
         `

    }
    postContainerElement.innerHTML = template
}

draw(allPosts)

function vote(n, postId) {

    // WRITE  FN that finds a post by its id
    // increases the count by n

    for (let i = 0; i < allPosts.length; i++) {
        const post = allPosts[i];
        if (postId == post.id) {
            post.score += n
            if (n < 0) {
                post.votes.down++
            } else {
                post.votes.up++
            }
        }
    }

    allPosts.sort(function(a, b) {
        return b.score - a.score
    })
    draw(allPosts)
}

// posts.splice(2, 0, this) reorder the array
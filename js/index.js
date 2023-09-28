console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "Hola";
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non aliquet arcu, at egestas quam. In quis felis non metus porttitor feugiat. Cras a erat ante. Nulla vehicula aliquam quam."
let numberOfLikes = 0;
const postCreatorName = "Mad Max";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.table({title,text,numberOfLikes,postCreatorName,isReported})
numberOfLikes++
console.table({title,text,numberOfLikes,postCreatorName,isReported})
// --^-- write your code here --^--

const data = [
  {
    id: 1,
    name: "Mr. Bonkers",
    bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            minima voluptates libero cumque rerum consequatur optio aliquid sint
            eum maxime illo laborum omnis quo ab rem cupiditate nulla
            perspiciatis ipsum!`,
    isGoodDog: true,
    image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
  },
  {
    id: 2,
    name: "Nugget",
    bio: `Bio 2`,
    isGoodDog: false,
    image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_2.jpg"
  },
  {
    id: 3,
    name: "Skittles",
    bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            minima voluptates libero cumque rerum consequatur optio aliquid sint
            eum maxime illo laborum omnis quo ab rem cupiditate nulla
            perspiciatis ipsum!`,
    isGoodDog: true,
    image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_3.jpg"
  },
  {
    id: 4,
    name: "Buttercup",
    bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            minima voluptates libero cumque rerum consequatur optio aliquid sint
            eum maxime illo laborum omnis quo ab rem cupiditate nulla
            perspiciatis ipsum!`,
    isGoodDog: false,
    image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_4.jpg"
  },
  {
    id: 5,
    name: "Lucipher",
    bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            minima voluptates libero cumque rerum consequatur optio aliquid sint
            eum maxime illo laborum omnis quo ab rem cupiditate nulla
            perspiciatis ipsum!`,
    isGoodDog: false,
    image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_5.jpg"
  },
  {
    id: 6,
    name: "Snooper Pooper",
    bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            minima voluptates libero cumque rerum consequatur optio aliquid sint
            eum maxime illo laborum omnis quo ab rem cupiditate nulla
            perspiciatis ipsum!`,
    isGoodDog: false,
    image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_6.jpg"
  },
  {
    id: 7,
    name: "Puddles",
    bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            minima voluptates libero cumque rerum consequatur optio aliquid sint
            eum maxime illo laborum omnis quo ab rem cupiditate nulla
            perspiciatis ipsum!`,
    isGoodDog: true,
    image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_7.jpg"
  }
];

const labelData = {
  'name': 
  {
      'text':"Dog's name"
      },
  'image':
  {   
      'text':"Dog's picture"
      },
  'bio':
  {
      'text':"Dog's bio"
      } 
}
const inputData = {
  'name':
  {
      'type':"text"
  },
  'image':
  {
      'type':"url"
  },
  'submit':
  {
      'type':"submit"
  }
}

window.data = data;
window.labelData = labelData;
window.inputData = inputData;

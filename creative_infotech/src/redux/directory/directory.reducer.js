 
const INITIAL_STATE = {
  sections: [
    {
      title: 'hack and slash',
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/428/474/509/darksiders-3-ps4-gameplay-review-wallpaper-preview.jpg',
      id: 1,
      linkUrl: 'shop/hackandslash'
    },
    {
      title: 'strategy',
      imageUrl: 'https://i.ytimg.com/vi/vtogcrIc3Pw/maxresdefault.jpg',
      id: 2,
      linkUrl: 'shop/strategy'
    },
    {
      title: 'sports',
      imageUrl: 'https://images7.alphacoders.com/932/thumb-350-932703.jpg',
      id: 3,
      linkUrl: 'shop/sports'
    },
    {
      title: 'first person shooters',
      imageUrl: 'https://images4.alphacoders.com/676/thumb-1920-676369.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/fps'
    },
    {
      title: 'story',
      imageUrl: 'https://images.alphacoders.com/150/thumb-1920-150363.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/story'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
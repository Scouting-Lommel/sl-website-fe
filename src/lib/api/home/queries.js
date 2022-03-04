import {gql} from '@apollo/client';

const getHomePageAttributes = () => {
    return gql`query{
        homePage{
          data{
            attributes{
              HomePage{
                ...on ComponentContentBlocksHero{
                  Title
                  IsHomePage
                  Image{
                    data{
                      attributes{
                        url
                      }
                    }
                  }
                  Links{
                    Label
                    IsButton
                    Page
                  }
                }
                ...on ComponentContentBlocksCallToAction{
                  Title
                  Content
                  Button{
                    Label
                    IsButton
                    Page
                  }
                }
                ...on ComponentContentBlocksImageText{
                  Title
                  Content
                  Image{
                    data{
                      attributes{
                        url
                      }
                    }
                  }
                  ImageLeftAligned
                }
                ...on ComponentContentBlocksCarousel{
                  Title
                  IsSmall
                  Items{
                    Title
                    Description
                    Image{
                      data{
                        attributes{
                          url
                        }
                      }
                    }
                    Href{
                      Label
                      IsButton
                      Page
                    }
                  }
                }
                ...on ComponentContentBlocksBlog{
                  Title
                  InitialItems
                  Button{
                    Label
                    IsButton
                    Page
                  }
                  Articles{
                    data{
                      attributes{
                        Title
                        Image{
                          data{
                            attributes{
                              url
                            }
                          }
                        }
                        Content
                        Published
                        DatePosted
                        DateEdited
                      }
                    }
                  }
                }
                ...on ComponentContentBlocksGallery{
                  Title
                  InitialItems
                  Images{
                    data{
                      attributes{
                        url
                      }
                    }
                  }
                  Button{
                    Label
                    IsButton
                    Page
                  }
                }
              }
            }
          }
        }
      }`
  }

  export{getHomePageAttributes};
export interface IPage {
  metadata: IMetadata;
  pageContent: IBlock[];
}

export interface IMetadata {
  title: string;
  author: string;
}

// The content in this interface will change to match the custom types
export interface IBlock {
  id: string;
  type: string;
  content: [] | string;
}

/*
Plan - start with the simpler ones..text and latex

text ~ text: string
link ~ url: string
latex ~ latex: string ex. '\frac{2}{3} + 5'
code ~ code: string ...this one might be trickier - may have to build ast..., but there
is probably a library that does this 
audio ~ gonna have to figure out the best platform to embed an audio component
file ??
video (youtube, vimeo) all they need is a link: string and we take care of the iframe
*/

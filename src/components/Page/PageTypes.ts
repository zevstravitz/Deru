export interface PageI {
    metadata: MetadataI,
    pageContent: ContentI[]
}

export interface MetadataI {
    title: string,
    author: string
}

// The content in this interface will change to match the custom types
export interface ContentI {
    type: string,
    content: [] | string
}
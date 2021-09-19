export interface Products {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating:number;
  imageUrl: string;
}

export const products = [

  {
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2021",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3,
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
  },
  {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2021",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4,
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
  },
  {
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2021",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4,
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
  },
  {
    "productId": 8,
    "productName": "Saw",
    "productCode": "TBX-0022",
    "releaseDate": "May 15, 2021",
    "description": "15-inch steel blade hand saw",
    "price": 11.55,
    "starRating": 3,
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
  },
  {
    "productId": 10,
    "productName": "Video Game Controller",
    "productCode": "GMG-0042",
    "releaseDate": "October 15, 2020",
    "description": "Standard two-button video game controller",
    "price": 35.95,
    "starRating": 4,
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
  }
]
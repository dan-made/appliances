export type Product = {
  id: number
  image: {
      blurDataURL: string
      url: string
  }
  price: number
  salePrice?: number | null
  tags: string[]
  title: string
}

export const products = [
  {
    "id": 1,
    "image": {
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGwABAAEFAQAAAAAAAAAAAAAAAAYBAgQFBwj/xAAiEAABBAEEAgMAAAAAAAAAAAADAAECBAUGESExEhMyQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APSuprhaGGsWQPFiQbdnl0oVHV9+FH3EJCUvxuFLdaiY+m7g36lHZc50/imslHjyu3qm/G30qOsYw72aADS+U4M7or6Ndq1QQW5aEWiigrbrjtAkE8fIcu2WFVwdCqeBgh8SR6fdEQbNERB//9k=",
      "url": "https://cdn.sanity.io/images/bow86i8j/dev/b585495b89853ba14a03f0f926abe764de89dc9c-800x800.jpg"
    },
    "price": 1000,
    "salePrice": null,
    "tags": ["Best Seller"],
    "title": "Refrigerator"
  },
  {
    "id": 2,
    "image": {
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQFAQMHCP/EACEQAAEEAgICAwAAAAAAAAAAAAIAAQMEBRExQQYSByFS/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/8QAGREAAwEBAQAAAAAAAAAAAAAAAAECERIh/9oADAMBAAIRAxEAPwD0rnMhJTiFoGF5S/T8KnoZvIWbwiUABC7fb+2+O1B+Q6120DDQIhNux5ZVPhFfJQFM+T99MPqLn2g6e4bzK506VVnGxAMg8Oi142N46cYlzpEzBmbVOGw+5R27ds+lFgxlcLDEzE+unfbIigk/CzREVCf/2Q==",
      "url": "https://cdn.sanity.io/images/bow86i8j/dev/b5f049005c7a7f03bcfe25ccc3fd05ed145dbf2a-800x800.jpg"
    },
    "price": 150,
    "salePrice": null,
    "tags": [],
    "title": "Rice Cooker"
  },
  {
    "id": 3,
    "image": {
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEFBgcI/8QAIxAAAQMEAgMAAwAAAAAAAAAAAQACAwQFBhEHMRIhUQgykf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDsme8pW7EamanqIXSyxgEgH6stYfyBs9zkfG+imie1pd3vYCouYeN6rJsprayGoqGOeAGsEe2+h9WIsnDVyopZJ6iabfg5gY2InexpB6lw/JIMmsMF0pWOZDMT4h3fpFRcSWSew4PRW+oDvOIu/bvW0QbrQPYCjxHwfxEQSBrpERB//9k=",
      "url": "https://cdn.sanity.io/images/bow86i8j/dev/8c5137fa968750fe4ccf33577954264e215e060d-800x800.jpg"
    },
    "price": 75,
    "salePrice": null,
    "tags": [],
    "title": "Microwave"
  },
  {
    "id": 4,
    "image": {
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUCBAYI/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIAAwQRBSESIjFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD0vy72hqUqsKKx9iPsl2ZWRXlKEuPTa0e9iVOSCtk1s7EKgJkG3IxL7nNV581O9CVHXr2oiY47edKN+gRIrWzcdLW2xYda6Ml18LiIxZQ4J+6MRAvVKErVV+AaiIgf/9k=",
      "url": "https://cdn.sanity.io/images/bow86i8j/dev/4103df69e88c89bb0f9420c7e82e4ec8f33b0219-800x800.jpg"
    },
    "price": 100,
    "salePrice": null,
    "tags": [],
    "title": "Ice Cream Maker"
  },
  {
    "id": 5,
    "image": {
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAUGAwQHCP/EACQQAAIBBAICAQUAAAAAAAAAAAECAwAEBREGBxIhIhNBUWJx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO0dgdmY3hmQitciGDSL5LoE7qtQd9YCVgPmpJ0Nqaje8sBZ5nkEL3jTbhi9LEuzqqFbdcYeaGOcXF2gHy8WUgig9VYq8F/joLpRpZUDD+GlafFUWPj1giHyRYgFP5FKCSe3heT6jxIz615FQTQ20BBBhj0f1FKUGREVECooVR6AH2pSlB//2Q==",
      "url": "https://cdn.sanity.io/images/bow86i8j/dev/bfdb4798911e73d6efb2b9ba8f9b8e6e661f3498-800x800.jpg"
    },
    "price": 250,
    "salePrice": 200,
    "tags": [],
    "title": "Toaster Oven"
  },
  {
    "id": 6,
    "image": {
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUDBgcI/8QAJBAAAQQBAgYDAAAAAAAAAAAAAgABAwQFBhEHEhMhMUEUIlH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A9FauydnG16xVHFjkk5Hcm3UeznMtUnpjOcJDNII/UfTrPxHnir1KBzyAAfIbuT7MomfydGxbxAQW65n1gbYZGd/K1EdLbuyIPhkWVTNQYLG5+oNbLVQswiXMwn6f9UWnw90vUtw2a+JgCaImICbfs7e0RBtqIiD/2Q==",
      "url": "https://cdn.sanity.io/images/bow86i8j/dev/24ffb29d08a4a5ad1821f37f4f2c124ec1baf1bb-800x800.jpg"
    },
    "price": 750,
    "salePrice": null,
    "tags": [],
    "title": "Dishwasher"
  },
  {
    "id": 7,
    "image": {
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAYEBQj/xAAlEAABBAECBQUAAAAAAAAAAAABAAIDBQQGERITMUGBFSFRUnH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9H6tspq6r3xWF2RM8RRn6k9/Cw6Gr7nAhyfW7U2Be7eMlnDwD4XauWxuwH80R7j3YZOgd2KntJWlkZ3YtoInkuIbJGQBt+IK9ERBkta7GtMJ+Lmx8yF3Ub7KWoND09bbnOgGS6djiW8yYuA8IiC0REQf/9k=",
      "url": "https://cdn.sanity.io/images/bow86i8j/dev/cf6d0e830684f016dc6dd47c97aa2a48b1fd91cd-800x800.jpg"
    },
    "price": 125,
    "salePrice": null,
    "tags": [],
    "title": "Blender"
  },
  {
    "id": 8,
    "image": {
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAQFBgf/xAAlEAABAwQBBAIDAAAAAAAAAAABAgMEAAUGERITFCExBwhBUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7nnVouN2lMpt99ftQbAKumAeVY2RZMgjT4jJy6YsKVvykDkKzn2Mzu745kkKJbFMhrglw80/nzUyw3x3IbLb50hY7gMjZb9hX8oO8wm1NRGUOLLi0pAKj7J/dKiY8uQuyxFSwet0xy37NKCkzHA8eyp5t69wEvuoHFKt6Oqr7f8AGWMw1N9tFeQEa4pDytUpQbpptLTaUIGkpGhSlKD/2Q==",
      "url": "https://cdn.sanity.io/images/bow86i8j/dev/f27029d342d8a0ecb6a187a8d35ef184f9523143-800x800.jpg"
    },
    "price": 175,
    "salePrice": null,
    "tags": ["Best Seller"],
    "title": "Coffee Maker"
  },
  {
    "id": 9,
    "image": {
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBwQI/8QAIxAAAgICAQIHAAAAAAAAAAAAAQIAAwQRBQYhEhMxQUJRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD07yGcmGAXB1re5z4HNY+YyrWds3x9xJ84vm4jVA6dgdfkyThX5DI6zxMeqq1Gpreu5/QE77GBtkSjCW1MZFvO7AO5iBayKx2ygmQXHpV/GtSB/sDvEQLYiIH/2Q==",
      "url": "https://cdn.sanity.io/images/bow86i8j/dev/a4427647c3acdce32bab70404959789908d07a28-800x800.jpg"
    },
    "price": 500,
    "salePrice": null,
    "tags": ["Best Seller"],
    "title": "Stand Mixer"
  },
  {
    "id": 10,
    "image": {
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAUHCAb/xAAnEAABBAEDAwMFAAAAAAAAAAABAAIDBAUGERMHEiEUMUEVMkJhcf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDTuZ5fpNvgeY5RE4tePg7e6rLoPqC9lMRffnMjzzeqdHE1587BWPqK7BQw1uazIGMETvJ/iz30arsmEdoWbALrrto2k9n3fIQaWRB7Igi9RYutlaPBbDizf8TsozRGlcVpzGur4yAtjMpk3ee47n9oiDp0REH/2Q==",
      "url": "https://cdn.sanity.io/images/bow86i8j/dev/02ec42d51d41cf9d37e2b6f4ed4bf755cfcb8c55-800x800.jpg"
    },
    "price": 450,
    "salePrice": null,
    "tags": [],
    "title": "Sous Vide"
  },
  {
    "id": 11,
    "image": {
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAQGBwj/xAAjEAABBAIBBAMBAAAAAAAAAAACAAEDBAURBhITMUEHCCFC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOm87YGrh7kxTNB0xE7SP/L68rNPr7yC3meO2jyuUO5ZayYsMnkR3+K+81pvkOOW6oyNG8g6YnbelmPxHxq1gZ+o8iEoSSvuIY9e0G1IiIIOZqR3aEkMpGIv7AtOq5xni9Cja70Z2TMS6m7ku22iILiiIg//2Q==",
      "url": "https://cdn.sanity.io/images/bow86i8j/dev/b71857044a73529b2e667c4f5a1256f6de158aa9-800x800.jpg"
    },
    "price": 300,
    "salePrice": 300,
    "tags": [],
    "title": "Juicer"
  },
  {
    "id": 12,
    "image": {
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQIAwYH/8QAJRAAAQQCAQIHAQAAAAAAAAAAAQACAwQFEQYHMRITFCEyQWGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALHch5ThuPGMZe/FXc/4tcff+LFQ5lx2/oVcvTe49h5gBXOepnSG9yjM2MpTy4bLJoNhmbtrdfQK0bH9BM+3KVfWW64reMGV8TjsD8QWdY9kjQ5jmuaexB2EUXE46DF4+GnWaRFE0AbO0QTEREBERB//2Q==",
      "url": "https://cdn.sanity.io/images/bow86i8j/dev/3f1db3cc8095130e8bca7ec303a823b8622aba79-800x800.jpg"
    },
    "price": 50,
    "salePrice": null,
    "tags": [],
    "title": "Griddle"
  }
] as Product[]
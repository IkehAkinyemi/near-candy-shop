![Near, Inc. logo](https://near.org/wp-content/themes/near-19/assets/img/logo.svg?t=1553011311)

## Design

### Interface

```ts
function updateCandyShop
```
- "Change" function (ie. a function that alters contract state)
- Updates the candyShop with a new Candy supply and returns the successful message

```ts
function deleteCandyItem
```
- "Change" function (ie. a function that alters contract state)
- Recieves a candy's uniqueId as parameter
- This grabs the candy supply with the uniqueId parameter and deletes it.

```ts
function getcandyItem
```
- "View" function (ie. a function that does not alters contract state)
- Recieves a candy's unique id as parameter
- Returns a Candy object from the candyShop 

```ts
function getCandyShop
```
- "View" function (ie. a function that does not alters contract state)
- Returns the whole candyShop details/content

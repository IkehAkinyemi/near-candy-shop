## Unit tests

Unit tests can be run from the top level folder using the following command:

```
yarn test:unit
```

### Tests for Contract in `index.unit.spec.ts`


```
[Describe]: Checks for creating account

 [Success]: ✔ updates the candyShop with a Candy
 [Success]: ✔ Smart contract panics when transaction fee is not attached

[Describe]: Grab an item from the candyShop

 [Success]: ✔ Returns an existing candy from the candyShop
 [Success]: ✔ Smart contract panics when there's no candy with such ID

[Describe]: Delete a supplied candy from the candyShop

 [Success]: ✔ Deletes an item from the candyShop, and returns a response
 [Success]: ✔ Smart contract panics when there's no candy with such ID

    [File]: src/candyShop/__tests__/index.unit.spec.ts
  [Groups]: 4 pass, 4 total
  [Result]: ✔ PASS
[Snapshot]: 0 total, 0 added, 0 removed, 0 different
 [Summary]: 6 pass,  0 fail, 6 total
    [Time]: 20.63ms

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  [Result]: ✔ PASS
   [Files]: 1 total
  [Groups]: 4 count, 4 pass
   [Tests]: 6 pass, 0 fail, 6 total
    [Time]: 6824.628ms
✨  Done in 13.64s.
```

# Materi: Iteration

Membuat program javascript untuk mendalami materi for dan while loop.

---

## Soal 1

```js
// Output:
* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * * 
```

[Link to Solution 1](index.js)

### Flowchart
```mermaid

flowchart LR

a((start))
b[x = 0]
c{x < 5}
d[temp = '''']
e[i = 0]
f{i < 5}
g[temp += ''* '']
h[/temp/]
j[i++]
k[x++]
z(((stop)))

a --> b --> c
c --true--> d
d --> e --> f
f --true--> g
g --> j
j --> f
f --false--> h
h --> k
k --> c
c --false--> z

```
---

## Soal 2

```js
// Output:
* 
* * 
* * * 
* * * * 
* * * * * 
```

[Link to Solution 2](index2.js)

### Flowchart

```mermaid

flowchart LR

start((start))
init_y[y = 0]
check_y{y < 5}
init_row[row = '' '']
init_x[x = 0]
check_x{x <= y}
inc_row[row += ''* '']
inc_x[x++]
out_row[/row/]
inc_y[y++]
stop(((stop)))

start --> init_y
init_y --> check_y
check_y --false--> stop
check_y --true--> init_row
init_row --> init_x
init_x --> check_x
check_x --true--> inc_row
inc_row --> inc_x
inc_x --> check_x
check_x --false--> out_row
out_row --> inc_y
inc_y --> check_y

```

---

## Soal 3

```js
// Output
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
```

[Link to Solution 3](index3.js)

### Flowchart

```mermaid

flowchart LR

start((start))
space[space = '' '']
star[star = ''*'']
row[row='''']
y[y = 5]
check_y{y > 0}
dec_y[y--]
x[x = 0]
check_x{x <= y - 1}
inc_x[x++]
z[z = 0]
check_z{z < 5 - y}
inc_z[z++]
add_space[row += space]
add_star[row += star + space]
out_row[/row/]
stop(((stop)))

start --> space --> star --> y --> row --> check_y
check_y --true--> x --> check_x
check_y --false--> stop
check_x --true--> add_space --> inc_x
check_x --false--> z --> check_z
check_z --true--> add_star --> inc_z
check_z --false--> out_row --> dec_y
dec_y --> check_y

```

---

## Soal 4

```js
// Output:
* * * * * 
*       *
*       *
*       *
* * * * * 
```

[Link to Solution 4](index4.js)

### Flowchart

```mermaid

flowchart LR

start((start))
n[/n/]
y[y = 0]
checkY{y < n}
row[row = '''']
x[x = 0]
checkX{x < n}
ifX{x == 0 or x == n - 1 or y == 0 or y == n - 1}
star[row += ''*'']
space[row += '' '']
incX[x++]
incY[y++]
out_row[/row/]
stop(((stop)))

start --> n --> y --> checkY
checkY --true--> row --> x --> checkX
checkY --false--> stop
checkX --true--> ifX
ifX --true--> star --> incX
ifX --false--> space --> incX
incX --> checkX --false--> out_row --> incY --> checkY

```
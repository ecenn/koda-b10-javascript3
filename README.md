# Materi: Iteration

Membuat program javascript untuk mendalami materi for dan while loop.

## Latihan Soal

```js
// Soal 1

// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
```

```mermaid

flowchart LR

a((start))
b[temp = '''']
c[x = 0]
d{x < 5}
e[i = 0]
f{i < 5}
g[temp += ''* '']
h[/temp/]
i[temp = '''']
j[i++]
k[x++]
z(((stop)))

a --> b --> c --> d
d --true--> e --> f
f --true--> g
g --> j
j --> f
f --false--> h
h --> i --> k
k --> d
d --false--> z

```

```js
// Soal 2

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
```

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
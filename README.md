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
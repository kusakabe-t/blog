---
title: "シェル上のユーザー名を一時的に$に変更する"
tags: ["shell"]
date: "2021-03-07 16:40:06"
---

これだけです。
$の後にスペースを空けないと、文字が重なって見辛くなります。

```bash
$ export PS1='$ '
```

$を任意の文字に変えて使うこともできます。

<img src="../images/change-display-name-temporary/1.png" alt="test" width="253" height="68" />

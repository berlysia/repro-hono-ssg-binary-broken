
reproduce:

```
bun install --frozen-lockfile
```

```
bun run dev
```

and open "http://localhost:5173/binary" in your browser. PNG image should be displayed (1px x 1px, only one red dot).

```
bun run build
```

and open `dist/binary.png` in your image viewer. It expected to be only one red dot, but it's broken in binary level.


```
> hexdump -C generated/from-ssr/binary.png
00000000  89 50 4e 47 0d 0a 1a 0a  00 00 00 0d 49 48 44 52  |.PNG........IHDR|
00000010  00 00 00 01 00 00 00 01  08 02 00 00 00 90 77 53  |..............wS|
00000020  de 00 00 00 0c 49 44 41  54 78 9c 63 f8 cf c0 00  |.....IDATx.c....|
00000030  00 03 01 01 00 c9 fe 92  ef 00 00 00 00 49 45 4e  |.............IEN|
00000040  44 ae 42 60 82 00 00 00  2f                       |D.B`..../|
00000049

> hexdump -C generated/from-ssg/binary.png
00000000  ef bf bd 50 4e 47 0d 0a  1a 0a 00 00 00 0d 49 48  |...PNG........IH|
00000010  44 52 00 00 00 01 00 00  00 01 08 02 00 00 00 ef  |DR..............|
00000020  bf bd 77 53 ef bf bd 00  00 00 0c 49 44 41 54 78  |..wS.......IDATx|
00000030  ef bf bd 63 ef bf bd ef  bf bd ef bf bd 00 00 03  |...c............|
00000040  01 01 00 ef bf bd ef bf  bd ef bf bd ef bf bd 00  |................|
00000050  00 00 00 49 45 4e 44 ef  bf bd 42 60 ef bf bd 00  |...IEND...B`....|
00000060  00 00 2f                                          |../|
00000063
```

FYI, the well-formed PNG file header is `89 50 4e 47 0d 0a 1a 0a` (in hex).
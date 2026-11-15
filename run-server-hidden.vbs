Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = "E:\porefolio"
WshShell.Run """C:\Program Files\nodejs\node.exe"" server.js", 0, False

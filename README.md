# api-server-example

## Note

dynamic import で config ファイルを読み込んでいるため、build 時に APP_ENV を指定しても関係ない。  
start 時に `APP_ENV=production` を指定する必要がある。  
これは build 時に決定させたほうが良さそう。

grammar Lol;

prog: expr+ EOF;

expr: expr ('+' | '-') expr | '(' expr ')' | FLOAT;

FLOAT: [0-9]+ ('.' [0-9]+)?;
WS: [ \t\r\n]+ -> skip;
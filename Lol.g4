grammar Lol;

prog: expr+ EOF;

expr:
	expr ('*' | '/') expr /* Precedence 1 */
	| expr ('+' | '-') expr
	| '(' expr ')'
	| FLOAT;

FLOAT: [0-9]+ ('.' [0-9]+)?;
WS: [ \t\r\n]+ -> skip;
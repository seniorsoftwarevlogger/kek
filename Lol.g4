grammar Lol;

prog: (varDeclaration | varAssignment | expr)+ EOF;

varDeclaration: 'var' ID | 'var' ID '=' expr;
varAssignment: ID '=' expr;

expr:
	expr ('*' | '/') expr /* Precedence 1 */
	| expr ('+' | '-') expr
	| '(' expr ')'
	| FLOAT
	| ID;

ID: [a-zA-Z_][a-zA-Z0-9_]*;
FLOAT: [0-9]+ ('.' [0-9]+)?;
WS: [ \t\r\n]+ -> skip;
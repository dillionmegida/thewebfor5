import React from 'react';

export default props => (
    <a target='_blank' rel='noopener noreferer' href={`https://github.com/dillionmegida/thewebfor5/edit/master${props.href.substr(0, props.href.length - 1)}.md`}>
        Edit Post on GitHub
    </a>
)
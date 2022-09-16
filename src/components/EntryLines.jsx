import React from 'react';
import EntryLine from './EntryLine';

function EntryLines({ entries, editEntry }) {
    return (
        <div>
            {entries.map((entry) => (
                <EntryLine 
                    key={entry.id} {...entry} editEntry={editEntry}
                 />
            ))}
        </div>
    );
}

export default EntryLines;
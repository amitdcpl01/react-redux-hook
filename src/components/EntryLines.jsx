import React from 'react';
import EntryLine from './EntryLine';

function EntryLines({ entries, deleteEntry, editEntry }) {
    return (
        <div>
            {entries.map((entry) => (
                <EntryLine 
                    key={entry.id} {...entry} deleteEntry={deleteEntry} editEntry={editEntry}
                    // entry={entry}
                    // description={entry.description} value={entry.value} isExpense={entry.isExpense} 
                 />
            ))}
        </div>
    );
}

export default EntryLines;
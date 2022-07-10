import React from 'react';
import EntryLine from './EntryLine';

function EntryLines({ entries, deleteEntry }) {
    return (
        <div>
            {entries.map((entry) => (
                <EntryLine 
                    key={entry.id} {...entry} deleteEntry={deleteEntry}
                    // entry={entry}
                    // description={entry.description} value={entry.value} isExpense={entry.isExpense} 
                 />
            ))}
        </div>
    );
}

export default EntryLines;
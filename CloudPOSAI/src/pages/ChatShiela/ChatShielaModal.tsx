import { Bot } from 'lucide-react';

export default function ChatShielaModal() {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 4}}>
                <div
                    style={{
                        background: 'var(--accent-bg)',
                        borderRadius: 10,
                        padding: 8,
                        color: 'red',
                        display: 'flex',
                        alignItems: 'center'
                        }}
                >
                    <Bot 
                        size={16}
                    />
                </div>
                <span style={{ fontSize: 18, fontWeight: 600 }}>Chat with Shiela</span>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    );
}
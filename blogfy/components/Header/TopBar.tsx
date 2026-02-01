export default function TopBar() {
    return (
        <div className="bg-easy-black text-white py-2">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
                    <h3 className="font-bold text-sm uppercase tracking-wider">Campanha Indique e Ganhe</h3>
                    <p className="text-xs opacity-90 max-w-2xl">
                        Indique a EasyJur para colegas e ganhe benefícios exclusivos como acesso premium e descontos.
                    </p>
                </div>
                <button className="bg-white text-easy-red px-4 py-1.5 rounded-full text-xs font-bold hover:bg-opacity-90 transition-all whitespace-nowrap">
                    Quero Indicar Agora
                </button>
            </div>
        </div>
    );
}
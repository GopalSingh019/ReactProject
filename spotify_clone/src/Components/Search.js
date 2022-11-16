import React from 'react'
import { useSelector } from 'react-redux';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Search() {
    const Search = useSelector(state => { if (state) return state.search; });

    return (
        <div className=' h-[85%]  bg-black opacity-[.90] w-[100%] overflow-hidden'>
            {Search &&
                <table className='w-[80%] h-[100%]'>
                    <thead className='text-left  sticky top-0 bg-black  border-b-[1px] border-grey-800'>
                        <tr>
                            <th className='w-[5%] text-white p-6'>#</th>
                            <th className='w-[35%] text-white p-6'>TITLE</th>
                            <th className='w-[40%] text-white p-6'>ALBUM</th>
                            <th className='w-[15%] text-white p-6'><AccessTimeIcon /></th>
                        </tr>
                    </thead>
                    <tbody className='overflow-x-auto h-[80%]'>
                        {Search.tracks.items.map((item, key) => {

                            let min = parseInt(item.duration_ms / 60000);
                            if (min < 9) min = "0" + min;
                            let sec = parseInt(item.duration_ms / 1000) % 60;
                            if (sec < 9) sec = "0" + sec;
                            let time = min + ":" + sec;
                            return (<tr className='hover:bg-slate-800 text-slate-400 hover:text-white truncate w-[100%]'>
                                <td className='w-[5%] p-1 pl-6 font-mono text-white'>{key + 1}</td>
                                <td className=' flex items-center p-1 pl-6 w-[45%] '><img className='w-[45px] h-[45px] object-fit m-2' src={item.album.images[0].url} />
                                    <div className='flex flex-col'><div className='font-mono text-base text-white w-[80%] overflow-hidden'>{item.name}</div>
                                        <div className='text-xs font-serif '>{item.artists.map((item, key) => item.name).join(",")}</div>
                                    </div>
                                </td>
                                <td className='w-[30%] font-mono  p-1 pl-6 text-base truncate overflow-hidden'>{item.album.name}</td>
                                <td className='w-[15%] font-mono text-slate-400  p-1 pl-6'>{time}</td>
                            </tr>);
                        })
                        }
                    </tbody>

                </table>
            }
        </div>
    )
}

export default Search
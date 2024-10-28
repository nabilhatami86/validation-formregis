import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class FormElement extends React.Component {
    state = {
        name: '',
        jurusan:'',
        gender:'',
        alamat:'',
        member:false,

    }

    handleSumbit = () =>  {
        alert (`
            name : ${this.state.name}
            jurusan : ${this.state.jurusan}
            gender : ${this.state.gender}
            alamat : ${this.state.alamat}
            member : ${this.state.member ? 'YES' : 'NO'} 
            `);

            this.setState({
                name: '',
                jurusan:'',
                gender:'',
                alamat:'',
                member:false,
            })
    }
    render() {
        return (
            <form className="container mt-4 w-50" onSubmit={this.handleSumbit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your name" 
                        onChange={e => this.setState({name: e.target.value})}
                        value={this.state.name}/>
                </div>

                <div className="form-group">
                    <label htmlFor="jurusan">Jurusan:</label>
                    <select className="form-control" id="jurusan" name="jurusan" onChange={e => this.setState({jurusan: e.target.value})}>
                        <option value=''>Pilih Jurusan</option>
                        <option value='TKJ'>Teknik Komputer Dan Jaringan</option>
                        <option value='MM'>Multimedia</option>
                        <option value='TSM'>Teknik Sepeda Motor</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Jenis Kelamin:</label>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="gender"
                            value="Laki-Laki"
                            onChange={e => this.setState({gender: e.target.value})}/>
                        <label className="form-check-label" htmlFor="laki-laki">Laki-Laki</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="gender"
                            value="Perempuan"
                            onChange={e => this.setState({gender: e.target.value})}/>
                        <label className="form-check-label" htmlFor="perempuan">Perempuan</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="alamat">Alamat:</label>
                    <textarea
                        className="form-control"
                        name="alamat"
                        rows="4"
                        placeholder="Masukkan alamat Anda"
                        onChange={e => this.setState({alamat: e.target.value})}>

                        </textarea>
                </div>

                <div className="form-group form-check">
                    <input 
                    type="checkbox" 
                    className="form-check-input" 
                    name="member" 
                    checked={this.state.member}
                    onChange={e => this.setState({member: e.target.checked})}/>
                    <label className="form-check-label" htmlFor="member">Member</label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

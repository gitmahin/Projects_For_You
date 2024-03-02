import React from 'react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import LoadingBar from 'react-top-loading-bar'

const Dashboard = () => {
    const [progress, setProgress] = useState(0)
    const{
        register,
        handleSubmit,
        setError,
        formState: {errors, isSubmitting}
    } = useForm()

    const onSubmit = async (data) =>{
        setProgress(40)
        const fetchData = await fetch('http://localhost:3000/sendposttodatabase', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then((res) =>{
            if(res.status == 200){
                setError('published', {message:"Published"})
                setProgress(100)  

            }else if(res.status == 400){
                setError('errorpub', {message:"Server is under maintenance"})
            }else{
                setError('errorpub', {message:"Something went wrong. Refresh and try again"})
                
            }
        })

    }
  return (
    <>
    <LoadingBar
                color='#6a05ec'
                progress={progress}
                shadow={0}
                height={4}
                onLoaderFinished={() => setProgress(0)}
            />
    <h1>Dashboard</h1>
    <div className="formwrap">
      <form className='postForm' onSubmit={handleSubmit(onSubmit)} >
        {errors.title && <div className="error">{errors.title.message}</div> }
        {errors.description && <div className="error">{errors.description.message}</div> }
        <input  className='intitle' type="text" {...register('title', {pattern: {value: String}, required: {value: true, message:"Title is required"}})}  />
        <textarea  className='indesc' type="text" {...register('description', {pattern: {value: String}, required: {value: true, message:"Post description is required"}})} />
        <input id='insubmit' type="submit" disabled={isSubmitting} value={isSubmitting? 'Publishing': 'Submit'} />
        {errors.published && <div className="success">{errors.published.message}</div> }
        {errors.errorpub && <div className="errorpub">{errors.errorpub.message}</div> }
      </form>

    </div>
    </>
  )
}

export default Dashboard

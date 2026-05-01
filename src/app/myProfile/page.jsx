'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiEnvelope } from 'react-icons/bi';

const MyProfilePage = () => {

    const userData = authClient.useSession();
    const user = userData.data?.user;

    const updateUser = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        await authClient.updateUser({
            image,
            name,
        })
    }

    return (
        <div className='container mx-auto my-8'>
            <h1 className='text-3xl font-bold text-center text-white'>My Profile</h1>
            <div className='flex flex-col justify-center items-center my-5'>
                <div className='bg-base-200 p-6 shadow-sm rounded-2xl w-[600] text-center space-y-4'>
                    <div className="avatar avatar-online">
                        <div className="w-24 rounded-full relative aspect-square">
                            <Image
                                src={user?.image}
                                fill
                                className="object-cover"
                                alt="user Image"
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-3xl font-bold'>{user?.name}</h4>
                        <p className='text-lg'>{user?.email}</p>
                    </div>
                    <div>
                        <Modal>
                            <Button variant="secondary">Update User Profile</Button>
                            <Modal.Backdrop>
                                <Modal.Container placement="auto">
                                    <Modal.Dialog className="sm:max-w-md">
                                        <Modal.CloseTrigger />
                                        <Modal.Header>
                                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                                <BiEnvelope className="size-5" />
                                            </Modal.Icon>
                                            <Modal.Heading>Update User</Modal.Heading>
                                        </Modal.Header>
                                        <Modal.Body className="p-6">
                                            <Surface variant="default">
                                                <form className="flex flex-col gap-4" onSubmit={updateUser}>
                                                    <TextField className="w-full" name="name" type="text">
                                                        <Label>Name</Label>
                                                        <Input placeholder="Update You Name" />
                                                    </TextField>
                                                    <TextField className="w-full" name="image" type="text">
                                                        <Label>Image URL</Label>
                                                        <Input placeholder="Update Image URL" />
                                                    </TextField>

                                                    <Modal.Footer>
                                                        <Button slot="close" variant="secondary">
                                                            Cancel
                                                        </Button>
                                                        <Button type='submit' slot="close">Update Profile</Button>
                                                    </Modal.Footer>
                                                </form>
                                            </Surface>
                                        </Modal.Body>
                                    </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;
'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import QRCode from 'react-qr-code'

const PresentACreditBox = () => {
    const [uniqueCode, setUniqueCode] = useState("AB-1234")

    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle className="text-center">Scan this QR code.</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center space-y-4 pt-4">
                <QRCode value={uniqueCode} size={200} className='shadow-xl' />
                <div className="text-2xl font-bold">{uniqueCode}</div>
            </div>
        </DialogContent>
    );
};

export default PresentACreditBox;
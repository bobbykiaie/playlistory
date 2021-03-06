import React, { useState } from 'react'
import styled from 'styled-components';
import { IoMdPerson } from 'react-icons/io';
import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import colors from '../../constants/colors';
import axios from 'axios';

const Info = (props: any) => {
    const [modalOpened, setModalOpened] = useState(false);

    async function submitBackup() {
        await axios.post('/backup', {
            playlistId: props.id,
            platform: props.platform
        });
        props.triggerRefetch();
        setModalOpened(false);
    }

    async function openBackupModal() {
        setModalOpened(true);

    }

    function onClosedModal() {
        setModalOpened(false);
    }

    return (
        <Container>
            <ImageContainer>
                <Image src={props.imageUrl}/>
            </ImageContainer>
            <TextContainer>
                <PlatformContainer>
                    <Platform>
                        {props.platform}
                    </Platform>
                </PlatformContainer>
                <TitleContainer>
                    <Title>{props.name}</Title>
                </TitleContainer>
                <DescriptionContainer>
                    <Description>{props.description || 'No description.'}</Description>
                </DescriptionContainer>
                <Row>
                    <OwnerContainer>
                        <OwnerIcon/>
                        <Owner>{props.owner?.name}</Owner>
                    </OwnerContainer>
                    <BackupButton
                        onClick={openBackupModal}
                    >
                        Backup
                    </BackupButton>
                </Row>
            </TextContainer>
            <StyledDialog
                open={modalOpened}
                onClose={onClosedModal}
            >
                <DialogContainer>
                    <DialogTitle>Create Backup</DialogTitle>
                    <DialogContent>
                        <BackupNameTextField
                            placeholder="Optional backup name"
                        />
                        <SubmitButtonCont>
                            <SubmitButton
                                onClick={submitBackup}
                            >Submit</SubmitButton>
                        </SubmitButtonCont>
                    </DialogContent>
                </DialogContainer>
            </StyledDialog>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1em;
    padding-bottom: .5em;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 12em;
    height: 12em;
    object-fit: cover;
`;

const PlatformContainer = styled.div`

`;

const Platform = styled.text`
    text-transform: uppercase;
    font-weight: lighter;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5em;
    width: 100%;
`;

const TitleContainer = styled.div`

`;

const Title = styled.h3`
    margin-top: .1em;
`;

const DescriptionContainer = styled.div`
    flex-grow: 1;
`;

const Description = styled.text`
    font-size: 12px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const OwnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: .5em;
    flex-grow: 1;
`;

const OwnerIcon = styled(IoMdPerson)`
    font-size: 1.5em;
`;

const Owner = styled.text`

`;

const BackupButton = styled(Button)`
    background-color: ${colors.PRIMARY_ACCENT};
    padding-left: 1em;
    padding-right: 1em;
    font-size: 18px;
    font-weight: bold;

    &:hover {
        background-color: ${colors.SECONDARY_ACCENT};
    }
`;

const StyledDialog = styled(Dialog)`
`;

const DialogContainer = styled.div`
    width: 20em;
    align-items: center;
    background-color: ${colors.LIGHT};
`;

const BackupNameTextField = styled(TextField)`
    width: 100%;
`;

const SubmitButtonCont = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const SubmitButton = styled(Button)`
    background-color: ${colors.PRIMARY_ACCENT};
    margin: 1em;
    padding-left: 1em;
    padding-right: 1em;
    font-size: 18px;
    font-weight: bold;

    &:hover {
        background-color: ${colors.SECONDARY_ACCENT};
    }
`;

export default Info
